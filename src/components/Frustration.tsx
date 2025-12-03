import dreamNoteImage from 'figma:asset/b4dae8060acce50e775d30e4a67595e095df5375.png';

export function Frustration() {
  return (
    <section className="py-20 bg-white relative mx-[80px] my-[0px]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl mb-6 text-gray-800 text-center">
              Dream Note: When Ambition Meets Reality
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={dreamNoteImage} 
              alt="Dream Note app mockup on phone" 
              className="float-right ml-8 mb-6 w-full max-w-[200px]"
            />
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Dream Note was the ambitious project I originally expected to complete for this independent study. The plan seemed straightforward: design an app, build it with AI, deploy it, done. In hindsight, that confidence was… optimistic.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              I spent weeks trying to bring this app to life, only to realize how much time, technical understanding, and communication clarity I was missing. Even with a background in programming, I kept asking myself why I couldn't just "talk to the machine correctly" or get it to understand what I wanted. What felt simple in theory became complex in execution.
            </p>
            
            <h3 className="text-sm uppercase text-indigo-500 mb-4 mt-8">What Dream Note Was Supposed to Be</h3>
            
            <p className="mb-4 text-gray-700 leading-relaxed">
              A dream-journaling app with:
            </p>
            
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc ml-6">
              <li>AI-generated dream analysis</li>
              <li>A user database</li>
              <li>A clean UI built through Figma Make</li>
            </ul>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              I started the project inside Figma Make, convinced the final output would look polished and functional. But after weeks of prompting, pasting long terminal commands, downloading tools I didn't understand, and chasing error after error, I ended up with a shallow prototype that barely worked.
            </p>
            
            <h3 className="text-sm uppercase text-indigo-500 mb-4 mt-8">The Turning Point</h3>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Halfway through the quarter, I hit a wall. I told my professor, "Okay, I'm starting over." I had vibed myself into a corner where I no longer understood the code, the structure, or my own progress. I wanted a finished product so badly that I ignored the fact that I was drowning in complexity.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              That's when my professor pushed me back toward theory, and that pivot ended up shaping the rest of my study.
            </p>
            
            <h3 className="text-sm uppercase text-indigo-500 mb-4 mt-8">What Dream Note Actually Taught Me</h3>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you're exploring vibe coding, here's what I learned the hard way:
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              It's okay if you don't know the acronyms.<br />
              It's okay if you feel lost.<br />
              It's okay if the machine confuses you.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              The answers are there. The tools can teach you. But you have to be willing to ask, "What do you mean?" over and over again. AI doesn't get annoyed. It doesn't judge your skill level.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Even though Dream Note became an abandoned project, it was the most important part of my learning. It forced me to move between no-code, low-code, agentic workflows, and CLI again and again. It showed me the limits of AI, the limits of my own understanding, and the gap between ambition and practicality.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed clear-both">
              Could I have finished it with more time? <strong>Absolutely.</strong><br />
              Can a designer build a fully functional app without backend knowledge? <strong>Probably not.</strong>
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              But Dream Note taught me what vibe coding truly is:<br />
              creativity, experimentation, collaboration with AI, and learning through trial and error.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}