import confusedImage from 'figma:asset/7169a7644af6d5c31bf2f7767f9fc47428cd9b20.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Disclaimer() {
  return (
    <section className="py-20 bg-white relative mx-[80px] my-[0px]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl mb-6">Disclaimer</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Now before we get further into the nitty gritty of vibe coding, I want to be raw with you: One of the first things I learned about it is that it can be overwhelming, and it is not as simple as it looks. But these technologies are new, and bound to not understand what you are trying to do, no matter how forth-coming you think you are with them. It takes practice, especially if you don't have any coding experience.
              </p>
              
              <p>
                AI is not magic. You are in a sea of companies competing for users to use their software, and it will take you a lot of time to find your niche, your favorite way to vibe. You likely will download some random programs because the machine told you to, and then ditch it entirely on your PC because it got too convoluted or you found something better. You might pay for a subscription or two, and then have to cancel them. These are the things I found myself doing when I started vibing. Sometimes the machine seems just as confused as you.
              </p>

              <p>
                In the words of my professor, "you can vibe all day and create nothing"(Travis Masingale). It's true, you really can just get lost in the conversation with a machine. Your mind will ping pong from idea to idea, you'll plan until your eyes strain from staring at a computer screen. It envelops you, it takes a lot of time, it's fun, it's hard.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6 flex flex-col justify-between">
              <p className="text-gray-700 leading-relaxed">
                Some people will never leave chatGPT's copy/paste for coding, some will transfer over to command lines where they are helping AI code, and then others will allow AI to take the reins entirely. These are all relevant ways to vibe code. I had this problem during my study that I had convinced myself I wasn't "doing it correctly". Which actually was preposterous, and didn't make sense. Now let's get into the types of vibe coding:
              </p>
              
              <div className="flex justify-end">
                <ImageWithFallback 
                  src={confusedImage} 
                  alt="Person confused while coding with AI"
                  className="w-3/4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}