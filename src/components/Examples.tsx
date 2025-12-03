import { ImageWithFallback } from './figma/ImageWithFallback';
import aquaQuestPrompt from 'figma:asset/024ec0143943de1ea7a12be5195ce4a2fef16ef1.png';
import base44Landing from 'figma:asset/1bbad586ab6c22ad45af81fe0929506ecee0b773.png';
import aquaQuestPreview from 'figma:asset/9c5d51f97978192092cd9a8a43e2a698e9c62820.png';
import glutenFreeEats from 'figma:asset/eb28eb58d1ac1550aaf258c251fb23163f01369e.png';

export function Examples() {
  // Placeholder examples - these can be updated with actual screenshots
  const examples = [
    {
      id: 1,
      title: 'AquaQuest - Water Tracking App',
      description: 'A gamified water tracking app built with base44 that reminds users to drink enough water and tracks hydrating vs dehydrating beverages.',
      image: aquaQuestPreview,
      tool: 'base44',
      link: 'https://aqua-quest-3ba7cb57.base44.app/'
    },
    {
      id: 2,
      title: 'Gluten Free Eats',
      description: 'A recipe website featuring searchable gluten-free recipes with category filtering, detailed recipe pages, and beautiful food photography.',
      image: glutenFreeEats,
      tool: 'Lovable',
      link: 'https://preview--no-gluten-delights.lovable.app/?__lovable_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiaTJOM3k0c2Z4dmNvRTdTd3lUZTI2MHFxaEJjMiIsInByb2plY3RfaWQiOiIzMjc1MmVlNS05ZDM1LTQxMTktOTliNy1lYzJkMWZiMzc4MjgiLCJub25jZSI6IjgwMjYwMjEyMTY2NzgyMjk5ZjI0ZDlkYWQ0ZDUxODliIiwiaXNzIjoibG92YWJsZS1hcGkiLCJzdWIiOiIzMjc1MmVlNS05ZDM1LTQxMTktOTliNy1lYzJkMWZiMzc4MjgiLCJhdWQiOlsibG92YWJsZS1hcHAiXSwiZXhwIjoxNzY1MDgwMjkyLCJuYmYiOjE3NjQ0NzU0OTIsImlhdCI6MTc2NDQ3NTQ5Mn0.G_XaPiGsYgCNDQY1iYRmOtA2YRfE9eR2XlemJENLBLg'
    }
  ];

  return (
    <section className="py-20 bg-white relative mx-[80px] my-[0px]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl mb-6 text-center">Creations</h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Vibe coding opens the door to almost anything you can imagine. Instead of being limited by traditional coding knowledge, you can explore ideas quickly, test concepts, and see how far AI tools can take you. A big part of this study was experimenting with different platforms, recreating existing ideas, and building small projects to understand each level of vibe coding in action.
              <br /><br />
              For most of my vibe coding process, I relied heavily on <strong>Figma Make</strong> and <strong>Visual Studio Code</strong>—but I'll get to that in the next section. Below are two projects I started using <strong>base44</strong> and <strong>Lovable</strong> to explore different AI-powered development platforms:
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example) => (
              <div 
                key={example.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                {example.link ? (
                  <a href={example.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <ImageWithFallback
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                        {example.tool}
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                        <span className="bg-white px-6 py-3 rounded-full shadow-lg">View Live Site →</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <ImageWithFallback
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {example.tool}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-4xl mb-2">{example.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}