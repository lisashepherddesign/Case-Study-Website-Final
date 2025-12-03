import { MousePointer, Code2, Bot, Terminal, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Results() {
  const [isNoCodeExpanded, setIsNoCodeExpanded] = useState(false);
  const [isLowCodeExpanded, setIsLowCodeExpanded] = useState(false);
  const [isAgenticExpanded, setIsAgenticExpanded] = useState(false);
  const [isCLIExpanded, setIsCLIExpanded] = useState(false);

  const handleNoCodeToggle = () => {
    setIsNoCodeExpanded(!isNoCodeExpanded);
    if (!isNoCodeExpanded) {
      setIsLowCodeExpanded(false);
      setIsAgenticExpanded(false);
      setIsCLIExpanded(false);
    }
  };

  const handleLowCodeToggle = () => {
    setIsLowCodeExpanded(!isLowCodeExpanded);
    if (!isLowCodeExpanded) {
      setIsNoCodeExpanded(false);
      setIsAgenticExpanded(false);
      setIsCLIExpanded(false);
    }
  };

  const handleAgenticToggle = () => {
    setIsAgenticExpanded(!isAgenticExpanded);
    if (!isAgenticExpanded) {
      setIsNoCodeExpanded(false);
      setIsLowCodeExpanded(false);
      setIsCLIExpanded(false);
    }
  };

  const handleCLIToggle = () => {
    setIsCLIExpanded(!isCLIExpanded);
    if (!isCLIExpanded) {
      setIsNoCodeExpanded(false);
      setIsLowCodeExpanded(false);
      setIsAgenticExpanded(false);
    }
  };

  return (
    <section className="py-20 bg-white relative mx-[80px] my-[0px]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl mb-6 text-center">No-code, Low-code, Agentic, CLIs, oh my!</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            2023-2025 statistics according to OpenAI:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div 
              className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-all relative"
              onClick={handleNoCodeToggle}
            >
              {isNoCodeExpanded && (
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/20 rounded-full p-2 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsNoCodeExpanded(false);
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MousePointer className="w-7 h-7" />
              </div>
              <div className="text-5xl mb-2">55%</div>
              <p className="text-indigo-100 mb-4">No-Code</p>
              
              <button 
                className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNoCodeToggle();
                }}
              >
                {isNoCodeExpanded ? 'Show Less' : 'Learn More'}
                <ChevronDown className={`w-4 h-4 transition-transform ${isNoCodeExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <div 
              className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-all relative"
              onClick={handleLowCodeToggle}
            >
              {isLowCodeExpanded && (
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/20 rounded-full p-2 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLowCodeExpanded(false);
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-7 h-7" />
              </div>
              <div className="text-5xl mb-2">30%</div>
              <p className="text-purple-100 mb-4">Low-code</p>
              
              <button 
                className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLowCodeToggle();
                }}
              >
                {isLowCodeExpanded ? 'Show Less' : 'Learn More'}
                <ChevronDown className={`w-4 h-4 transition-transform ${isLowCodeExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <div 
              className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-all relative"
              onClick={handleAgenticToggle}
            >
              {isAgenticExpanded && (
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/20 rounded-full p-2 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAgenticExpanded(false);
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-7 h-7" />
              </div>
              <div className="text-5xl mb-2">10%</div>
              <p className="text-pink-100 mb-4">Agentic</p>
              
              <button 
                className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAgenticToggle();
                }}
              >
                {isAgenticExpanded ? 'Show Less' : 'Learn More'}
                <ChevronDown className={`w-4 h-4 transition-transform ${isAgenticExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <div 
              className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-2xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-all relative"
              onClick={handleCLIToggle}
            >
              {isCLIExpanded && (
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/20 rounded-full p-2 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCLIExpanded(false);
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Terminal className="w-7 h-7" />
              </div>
              <div className="text-5xl mb-2">5%</div>
              <p className="text-teal-100">CLI</p>
              
              <button 
                className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCLIToggle();
                }}
              >
                {isCLIExpanded ? 'Show Less' : 'Learn More'}
                <ChevronDown className={`w-4 h-4 transition-transform ${isCLIExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Expanded content sections appear below the grid */}
          {isNoCodeExpanded && (
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl">
              <h4 className="text-4xl mb-4">No Code</h4>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                No-code is when you build something without writing any actual code. You rely entirely on visual tools, drag-and-drop editors, or AI platforms to handle the technical side for you. It's the most beginner-friendly way to vibe code.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Pros</h5>
                  <ul className="space-y-2 text-indigo-100">
                    <li>✓ Fast prototyping — get ideas built quickly</li>
                    <li>✓ Beginner-friendly — no coding skills required</li>
                    <li>✓ Visual + intuitive — drag-and-drop workflow</li>
                    <li>✓ Great for testing concepts — perfect for portfolios, UX projects, and demos</li>
                    <li>✓ AI-supported — can generate layouts, copy, flows, and logic</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Cons</h5>
                  <ul className="space-y-2 text-indigo-100">
                    <li>✗ Limited customization — you can't build every feature</li>
                    <li>✗ Platform restrictions — you're stuck with whatever the tool supports</li>
                    <li>✗ Hard to scale — not ideal for complex apps</li>
                    <li>✗ Less technical learning — you don't gain deep coding skills</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {isLowCodeExpanded && (
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl">
              <h4 className="text-4xl mb-4">Low Code</h4>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Low-code is a workflow where you use AI or visual tools to generate most of the code, but you still edit, fix, or customize parts of it yourself. You work alongside the AI rather than relying on it completely. It's a bridge between no-code and full coding.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Pros</h5>
                  <ul className="space-y-2 text-purple-100">
                    <li>✓ More control than no-code</li>
                    <li>✓ Customization — you can tweak layouts, logic, styling, and components</li>
                    <li>✓ Real coding experience without starting from scratch</li>
                    <li>✓ AI-assisted debugging makes learning easier</li>
                    <li>✓ Better scalability than no-code tools</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Cons</h5>
                  <ul className="space-y-2 text-purple-100">
                    <li>✗ Steeper learning curve — you still need to understand basic coding concepts</li>
                    <li>✗ More setup — file structures, imports, assets, dependencies</li>
                    <li>✗ Errors happen — and you must fix them (with AI's help)</li>
                    <li>✗ Takes longer than pure no-code building</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {isAgenticExpanded && (
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl">
              <h4 className="text-4xl mb-4">Agentic</h4>
              <p className="text-pink-100 mb-6 leading-relaxed">
                Agentic vibe coding is when AI takes the lead in building your project. Instead of only generating code, the AI acts like a junior developer — creating files, structuring projects, editing code, and performing multi-step actions automatically. You guide the direction, and the AI does most of the execution.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Pros</h5>
                  <ul className="space-y-2 text-pink-100">
                    <li>✓ AI handles the heavy lifting — file creation, structure, boilerplate code</li>
                    <li>✓ Fastest way to build complex features</li>
                    <li>✓ Reduces technical barriers for beginners</li>
                    <li>✓ Great for experimenting with ideas quickly</li>
                    <li>✓ Teaches patterns by showing full working examples</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Cons</h5>
                  <ul className="space-y-2 text-pink-100">
                    <li>✗ Can feel unpredictable — AI may build things you didn't expect</li>
                    <li>✗ Harder to understand the code it generates</li>
                    <li>✗ Not ideal for long-term maintenance</li>
                    <li>✗ Easier to get "lost" if you don't know what the AI changed</li>
                    <li>✗ Still requires oversight — you must guide and correct it</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {isCLIExpanded && (
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl">
              <h4 className="text-4xl mb-4">CLI</h4>
              <p className="text-teal-100 mb-6 leading-relaxed">
                CLI-based vibe coding involves working with terminal commands (like npm, git, vite, or npx) while collaborating with AI. You still rely on AI for explanations and debugging, but you execute real development commands yourself. It's the "hands-on" end of vibe coding.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Pros</h5>
                  <ul className="space-y-2 text-teal-100">
                    <li>✓ Most control over how your project runs</li>
                    <li>✓ Real-world dev experience without being a full programmer</li>
                    <li>✓ AI helps explain errors that would otherwise be confusing</li>
                    <li>✓ Better performance + flexibility than no-code and low-code tools</li>
                    <li>✓ Prepares you for agentic coding and full-stack workflows</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h5 className="text-4xl mb-3">Cons</h5>
                  <ul className="space-y-2 text-teal-100">
                    <li>✗ Steeper learning curve — requires understanding file paths, errors, and setup</li>
                    <li>✗ Errors can feel intimidating (imports, build failures, missing packages)</li>
                    <li>✗ Slower than no-code for small ideas</li>
                    <li>✗ Requires installs + environment setup</li>
                    <li>✗ You need AI support unless you're already comfortable with coding</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* My Experience Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="prose max-w-none">
              <h3 className="text-sm uppercase text-indigo-500 mb-4">Statistics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                According to ChatGPT's analysis of current AI-assisted development trends, most people naturally fall into different "levels" of vibe coding depending on their comfort with technology. The majority start in No-Code (<strong>55%</strong>), using visual tools or AI to build things without touching real code. Around <strong>30%</strong> move into Low-Code, where they begin collaborating with AI and making small edits to the code it generates. A smaller group, about <strong>10%</strong>, uses Agentic tools, letting AI handle entire builds or multi-step tasks automatically. Only <strong>5%</strong> regularly work in CLI-based workflows, since that requires the most technical knowledge and hands-on coding.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                These percentages show that vibe coding is not one single approach — people land wherever they feel most comfortable, and many move between categories as they learn.
              </p>
              
              <h3 className="text-sm uppercase text-indigo-500 mb-4 mt-8">Personal Experience</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In my experience for this study, I jumped between all four of these a LOT. It wasn't because I was intentionally looking for the differences between them—it was simply necessary as I designed, experimented, and learned how to vibe. In the past, I would ask ChatGPT to help me write some code and then ask it to break the code down for me, explaining what each line meant. In the Java world, that looked like asking "What is a node?", "How do I build a circularly linked list?", or "What is a char vs. a string?". I would describe this as using LLMs (Large Language Models) as a second teacher or study guide. This is an example of no-code, since I wasn't writing anything myself—I was just using the tool to learn how code works. If I were to take its explanation and retype the code line-by-line into a Java environment, that would become full coding.
              </p>
              
              <h3 className="text-sm uppercase text-indigo-500 mb-4 mt-8">No-code, Low-code, Agentic, CLI</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                No-code can also look like asking Figma Make to design something for you or prototyping directly in Figma's design software. Once you take the code out of that software, or start manipulating it without relying on prompts, you're moving into low-code territory.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Low-code involves interacting with the codebase, even in the smallest ways. This could be dropping an image into the project and asking the machine to place or resize it. You're now part of the outcome, even if the AI writes the code for you. Other examples include adding assets to the assets folder, fixing broken file paths, updating styles, renaming components, or simply following the AI's instructions as it tells you how to modify something.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Agentic AI is where much of the "vibe coding magic" happens, even if only about 10% of people who vibe code actually use it. Agentic AI involves letting the machine take over multi-step tasks and act almost like a junior developer. You tell it where to put things, what to change, what you want, mixing technical phrases with normal conversation, and it brings your project to life. My favorite example of this is inside Visual Studio Code: you can select a model to assist your build, tell it what you need, and it can go through your folders and files, updating them automatically. Figma Make also does a version of this, but instead of editing files on your computer, it performs its agentic actions within its own software environment.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Lastly, there is CLI. This stands for Command Line Interface, a text-based way of controlling your computer or development environment. Instead of clicking buttons or using a visual app, you type commands into a terminal. You're manually creating, installing, running, and managing things through text commands. It becomes vibe coding when AI guides you through what to type and explains what each command does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}