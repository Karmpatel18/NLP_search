from fastapi import FastAPI
import dotenv
import os
from embedder import get_embedding
from pinecone import Pinecone, ServerlessSpec # type: ignore


# Load environment variables
dotenv.load_dotenv()
api = os.getenv("API_KEY")

# Initialize FastAPI app
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

pc = Pinecone(api_key=api)

# Create a dense index with integrated embedding
index_name = "quickstart-py"
if not pc.has_index(index_name):
    pc.create_index_for_model(
        name=index_name,
        cloud="aws",
        region="us-east-1",
        embed={
            "model":"llama-text-embed-v2",
            "field_map":{"text": "chunk_text"}
        }
    )
    
