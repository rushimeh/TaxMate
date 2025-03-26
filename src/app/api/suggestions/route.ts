import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const { text: suggestions } = await generateText({
    model: openai('gpt-4o-mini'),
    prompt: `Generate 3 highly specific but concise, contextually relevant follow-up questions that the user would ask you NOT a question you would ask them.     Pay attention to the most recent conversation if we are in a new topic, ignore the previous topics. That means focus more on the end of the context.
    Provide these suggestions based on the following message:
    Conversation Context:
    ${JSON.stringify(messages)}. Organize so that it is 1. .... 2. .... 3. ... and no different`,
        maxTokens: 300,
    });

  const parsedSuggestions = suggestions
  .split('\n')
  .map(suggestion => 
    suggestion
      .replace(/^\d+\.\s*/, '') 
      .trim()
  )
  .filter(suggestion => suggestion.length > 0);

  return Response.json(parsedSuggestions);
}