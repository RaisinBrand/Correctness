from fastapi import FastAPI, UploadFile, File
from app.routers import upload

app = FastAPI()

app.include_router(upload.router)

@app.get("/")
def root():
    return {"msg": "Backend running!"}

