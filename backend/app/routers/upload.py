from fastapi import UploadFile, File, APIRouter
import os



router = APIRouter(prefix="/upload", tags = ["upload"])
ASSETS_DIR = os.path.join(os.path.dirname(__file__), "..", "assets/pdf")


@router.post("/", summary = " upload file to assets, maybe database in the future")
async def fileUpload(file: UploadFile = File(...)):
    print("hit route")
    print(file.filename)
    os.makedirs(ASSETS_DIR, exist_ok=True)
    filepath = os.path.join(ASSETS_DIR, file.filename)
    with open(filepath, "wb") as f:
        content = await file.read()
        f.write(content)
    return {"filename": file.filename}