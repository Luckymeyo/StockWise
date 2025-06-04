from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

CSV_FILE = "transactions.csv"

# Model validasi input
class Transaction(BaseModel):
    order_id: str
    pizza_name: str
    quantity: int
    order_date: str  # format: 'YYYY-MM-DD'
    unit_price: float



origins = [

    "*",  # Kalau mau buka semua origin (untuk development, hati-hati di production)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # bisa juga ["*"] kalau mau semua origin boleh
    allow_credentials=True,
    allow_methods=["*"],  # izinkan semua method GET, POST, dll
    allow_headers=["*"],  # izinkan semua headers
)

@app.get("/")
async def root():
    return {"message": "Hello World from FastAPI!"}


@app.get("/transactions")
async def get_transactions():
    # Baca file Excel
    df = pd.read_csv("transactions.csv", usecols=["order_id", "quantity", "order_date", "unit_price", "pizza_name"])

    # Pastikan order_date bertipe datetime
    df["order_date"] = pd.to_datetime(df["order_date"])

    # Urutkan berdasarkan order_date (terbaru dulu), ambil 100 teratas
    df_sorted = df.sort_values(by="order_date", ascending=False)

    # Ubah DataFrame ke list of dict (JSON friendly)
    transactions = df_sorted.to_dict(orient="records")

    return transactions


@app.post("/transactions")
async def add_transaction(transaction: Transaction):
    # Buat dict dari input
    new_data = {
        "order_id": transaction.order_id,
        "quantity": transaction.quantity,
        "order_date": transaction.order_date,
        "unit_price": transaction.unit_price,
        "pizza_name": transaction.pizza_name
    }

    # Jika file sudah ada, append; jika belum, buat baru
    if os.path.exists(CSV_FILE):
        df = pd.read_csv(CSV_FILE)
        df = pd.concat([df, pd.DataFrame([new_data])], ignore_index=True)
    else:
        df = pd.DataFrame([new_data])

    # Simpan kembali ke CSV
    df.to_csv(CSV_FILE, index=False)

    return {"message": "Transaction added successfully"}