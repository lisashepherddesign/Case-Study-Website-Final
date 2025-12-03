import { ImageWithFallback } from './figma/ImageWithFallback';
import karpathyImage from 'figma:asset/c2fee06eaa0ff69c2d5f565110a81962695b435d.png';
import arrowImage from 'figma:asset/dbeeb658ac187360e25bf1a9e66c54793408214f.png';

export function Approach() {
  return (
    <section className="py-20 bg-white relative mx-[80px] my-[0px]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl mb-6">Vibe Code: a definition</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4 text-gray-700 leading-relaxed max-w-2xl">
              <p>
                When I took up an independent study course on vibe coding, I thought I had a general idea of what I was getting into. I knew it involved prompting AI to build things with code, something I had already experimented with in the past. The part I was unsure about was where to take it. Independent studies rely heavily on self-direction, and there were so many possible angles that I decided to start with the simplest question: "What is vibe coding?" Because even though I thought I understood it, I realized I didn't fully know.
              </p>
              
              <h3 className="text-sm uppercase text-indigo-500 mb-4 mt-8">Definition</h3>
              <p>
                The term was coined by computer scientist Andrej Karpathy. According to Wikipedia, vibe coding is "a chatbot-based approach to creating software where the developer describes a project or task to a large language model (LLM), which generates code based on the prompt." It refers to creating software or products from a general idea or "vibe," using natural language prompts with AI tools like GPT or low-code and no-code platforms. It focuses on creativity, rapid prototyping, and exploring ideas without getting stuck in traditional development processes.
              </p>

              <div className="mt-6">
                <p className="text-gray-700 leading-relaxed">
                  Andrej Karpathy's first vibe coded web application:{' '}
                  <a 
                    href="https://www.menugen.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 underline"
                  >
                    MenuGen - AI Menu Image Generator
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:w-80 flex-shrink-0 relative">
              <div className="relative">
                <ImageWithFallback 
                  src={karpathyImage} 
                  alt="Andrej Karpathy presenting"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center mt-2 text-gray-600 leading-relaxed">Andrej Karpathy</p>
              </div>

              {/* In short section - below image on right side */}
              <div className="mt-6">
                <div className="bg-indigo-50 p-3">
                  <p className="mb-3 text-center text-gray-700 leading-relaxed">
                    <strong>In short:</strong>
                  </p>
                  
                  {/* Step 1 */}
                  <div className="mb-3">
                    <p className="mb-1 text-center text-gray-700 leading-relaxed">Grab an Idea</p>
                    <div className="flex justify-center">
                      <svg width="30" height="40" viewBox="0 0 40 50" className="text-indigo-600">
                        {/* Main line */}
                        <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Arrow left line */}
                        <line x1="20" y1="35" x2="13" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Arrow right line */}
                        <line x1="20" y1="35" x2="27" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-3">
                    <p className="mb-1 text-center text-gray-700 leading-relaxed">Collaborate with AI</p>
                    <div className="flex justify-center">
                      <svg width="30" height="40" viewBox="0 0 40 50" className="text-indigo-600">
                        {/* Main line */}
                        <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Arrow left line */}
                        <line x1="20" y1="35" x2="13" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Arrow right line */}
                        <line x1="20" y1="35" x2="27" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 3 - no arrow */}
                  <div>
                    <p className="text-center text-gray-700 leading-relaxed">Code something cool.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}