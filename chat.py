import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))



def chat(name):
    prompt = f"Generate two paragraphs of a scifi story with the character name {name}. It needs to take place in the present and then at the end prompt me for a future and past ('A: Future' and 'B: Past')."

    chat_completion = client.chat.completions.create(
        model="llama-3.1-70b-versatile",
        messages=[
            {"role": "system", "content": "You are a storyteller telling a story about a time traveling car called the Dolorian."},
            {"role": "user", "content": prompt}
        ]
    )
    return chat_completion.choices[0].message.content



prompt = input("You: ")
response = chat(prompt)
print(response)


# system
# user
# assistant
