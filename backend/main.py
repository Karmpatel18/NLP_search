from fastapi import FastAPI
import dotenv
dotenv.load_dotenv()

app = FastAPI()
api = dotenv.get_key(dotenv.find_dotenv(), "API_KEY")
@app.get("/")
def read_root():
    return {"message": "Hello World", "api_key": api}
