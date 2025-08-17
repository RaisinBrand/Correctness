from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.get("/")
def root():
    return {"msg": "Backend running!"}

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    # For now just echo back the filename
    return {"filename": file.filename}
