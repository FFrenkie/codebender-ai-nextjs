import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', {
      status: 405,
    });
  }

  // Extract the `prompt` from the body of the request
  const body = await req.text();
  const { prompt } = JSON.parse(body);
  
  try {
    // Ask Dall-E to generate an image based on the prompt
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt + " Make the image in an American style, try to use American national symbols, you may also include political parties and what not to make it more American.",
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = response?.data?.[0]?.url;
    console.log('imageUrl:', imageUrl);
    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error(error);
    return new Response(error?.message || error?.toString(), {
      status: 500,
    })
  }
}