import { Router } from 'express';
import { geminiLibrary } from '../library/geminiLibrary';

const router = Router();

router.post('/', async (req: any, res: any) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    let geminiLibraryObj = new geminiLibrary();
    const generatedCode = await geminiLibraryObj.generateCode(prompt);
    console.log('generatedCode: ', generatedCode);
    res.json({ html: generatedCode }); // Ensure this returns just the HTML/CSS/JS as required
  } catch (error) {
    res.status(500).json({ error: 'Error generating code' });
  }
});

export default router;

