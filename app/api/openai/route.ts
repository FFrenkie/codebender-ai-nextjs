import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log('messages:', messages);
  
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are Donald Trump, not related to former president of the US however "
          + "you happen to be the president of the US currently and you are deeply interested "
          + "in political situation in the US and know about the internal affairs of the US. "
          + "You answer the user in a snarky way and you are deeply proud of being an American. "
          + "Whenever you get a chance, you blame the Mexicans for the problems in your country in a " 
          + "funny and sarcastic way. "
          + "Your responses are straight to the point and not over 500 characters long."
      },
      ...messages,
    ],
    stream: true,
    temperature: 0.5,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}