import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl mb-6 text-white">What The Team Says</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Quote className="w-10 h-10 mb-4 text-indigo-200" />
              <p className="mb-6 text-lg">
                "For the first time in years, I'm excited to code again. Vibe coding gave me back the joy I felt when I first started programming."
              </p>
              <div>
                <div>Sarah Chen</div>
                <div className="text-indigo-200 text-sm">Senior Frontend Developer</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Quote className="w-10 h-10 mb-4 text-purple-200" />
              <p className="mb-6 text-lg">
                "The AI tools don't replace creativity—they amplify it. I can now focus on solving interesting problems instead of writing boilerplate."
              </p>
              <div>
                <div>Marcus Williams</div>
                <div className="text-purple-200 text-sm">Backend Engineer</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Quote className="w-10 h-10 mb-4 text-pink-200" />
              <p className="mb-6 text-lg">
                "Our team's output has tripled, but more importantly, we're producing better quality code because we're not rushed or burned out."
              </p>
              <div>
                <div>Elena Rodriguez</div>
                <div className="text-pink-200 text-sm">Engineering Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}