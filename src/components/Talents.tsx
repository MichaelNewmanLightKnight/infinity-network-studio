import teamCollabImage from "@/assets/careers-team-collab.jpg";
import productionImage from "@/assets/careers-production.jpg";
import visionImage from "@/assets/careers-vision.jpg";
import cultureImage from "@/assets/careers-culture.jpg";
import graphicsDesignerImage from "@/assets/role-graphics-designer.jpg";
import videoEditorImage from "@/assets/role-video-editor.jpg";
import videographerImage from "@/assets/role-videographer.jpg";
import presenterImage from "@/assets/role-presenter.jpg";

const Talents = () => {
  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Prominent Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-16 border border-primary/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Interested in Fun, Fulfilling, and Financially Rewarding Opportunities (as a freelancer or staff)?
            </h1>
          </div>
          
          <div className="prose prose-lg mx-auto text-foreground max-w-4xl">
            <p className="text-lg leading-relaxed mb-6">
              At Infinity Network Studio, we don't just produce content – we craft experiences that resonate, inspire, and transform. As a cutting-edge studio specializing in premium videos, podcasts, and documentaries, we're on a mission to redefine storytelling for the digital age.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision: Infinite Possibilities, Boundless Creativity</h3>
            <p className="text-lg leading-relaxed mb-6">
              We know that the most powerful stories emerge when brilliant minds collaborate without limits. Our studio represents the convergence of artistic excellence and technological innovation, where every project becomes a masterpiece that captivates global audiences.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 text-accent font-medium">
              As we launch this exciting journey, we're seeking exceptional talent to join our founding team – individuals who don't just want a job, but crave the opportunity to build something revolutionary from the ground up.
            </p>

            {/* Team Collaboration Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
              <img 
                src={teamCollabImage} 
                alt="Creative team collaborating at Infinity Network Studio" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="bg-card rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Infinity Network Studio?</h3>
              <ul className="space-y-3 text-lg">
                <li><strong className="text-primary">Ground-Floor Opportunity:</strong> Be part of our origin story and shape the company's DNA</li>
                <li><strong className="text-primary">Multi-Disciplinary Growth:</strong> Expand your skillset across multiple creative domains</li>
                <li><strong className="text-primary">Creative Freedom:</strong> Work on diverse, exciting projects that challenge conventional thinking</li>
                <li><strong className="text-primary">Collaborative Culture:</strong> Join a tight-knit team where every voice matters</li>
                <li><strong className="text-primary">Premium Quality Focus:</strong> Create content that sets industry standards</li>
                <li><strong className="text-primary">Career Acceleration:</strong> Fast-track your professional development in a dynamic environment</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={graphicsDesignerImage} 
                    alt="Graphics and Animation Designer creative workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-4">1. Graphics & Animation Designer</h4>
                  <p className="text-base leading-relaxed">
                    Transform ideas into stunning visual experiences. Lead our brand identity while creating compelling graphics, animations, and digital assets that bring stories to life. Master of Adobe Creative Suite, you'll shape how the world sees our content.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={videoEditorImage} 
                    alt="Video and Audio Editor workspace with timelines and waveforms" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-4">2. Video & Audio Editor</h4>
                  <p className="text-base leading-relaxed">
                    Be the architect of our sonic and visual narratives. Craft seamless edits that elevate raw footage into cinematic masterpieces. Your technical mastery and storytelling instincts will define the quality that sets us apart.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={videographerImage} 
                    alt="Videographer camera operator with cinematic lighting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-4">3. Videographer/Camera Operator</h4>
                  <p className="text-base leading-relaxed">
                    Capture the moments that matter. Your lens will be the first step in creating content that moves audiences. From intimate interviews to dynamic documentaries, you'll bring technical excellence and artistic vision to every shot.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={presenterImage} 
                    alt="Female presenter and host with microphone" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-4">4. Female Presenter/Host</h4>
                  <p className="text-base leading-relaxed">
                    Become the voice that connects with millions. Lead conversations that matter, conduct compelling interviews, and represent our brand with authenticity and charisma. Your presence will be the bridge between our stories and our audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Production Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
              <img 
                src={productionImage} 
                alt="Professional video production at Infinity Network Studio" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Flexible Engagement Options</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-secondary">STAFF POSITIONS:</h4>
                  <p>Full-time roles with comprehensive benefits and growth opportunities</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary">FREELANCE PARTNERSHIPS:</h4>
                  <p>Project-based collaborations with competitive rates and creative freedom</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">What We're Looking For</h3>
              <p className="text-lg font-semibold text-secondary mb-4">The Infinity Network Studio Team Member:</p>
              <ul className="space-y-2 text-lg">
                <li>• <strong>Versatile Creators</strong> who thrive in multi-disciplinary environments</li>
                <li>• <strong>Learning Enthusiasts</strong> who quickly master new skills and adapt to evolution</li>
                <li>• <strong>Collaborative Leaders</strong> who elevate team performance</li>
                <li>• <strong>Quality Champions</strong> who maintain excellence across all contributions</li>
                <li>• <strong>Growth Catalysts</strong> who take ownership beyond assigned responsibilities</li>
              </ul>
            </div>
            
            <div className="text-center bg-primary/5 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Skills vs. Credentials: Talent Wins</h3>
              <p className="text-lg">
                We value demonstrable skills over academic credentials. Whether you're a self-taught creative genius or a formally trained professional – if you can prove your abilities, we want to meet you.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Application Process</h3>
              <h4 className="text-xl font-semibold text-secondary mb-4">Ready to Join the Revolution?</h4>
              <p className="text-lg mb-6">Submit your application including:</p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 mb-6">
                <li><strong>Application Letter:</strong> Tell us your story and why Infinity Network Studio is your next chapter</li>
                <li><strong>CV/Resume:</strong> Showcase your experience and achievements</li>
                <li><strong>Portfolio/Demo Reel:</strong> Let your work speak for itself</li>
              </ul>
              <p className="text-lg mb-8">
                <strong>What Happens Next:</strong> Every candidate will participate in our comprehensive interview process, including practical skills assessments. We believe in seeing talent in action, not just on paper.
              </p>
              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Take the Leap</h4>
                <p className="text-lg">
                  This is more than a job opportunity – it's your invitation to be part of something extraordinary. Join us in creating content that doesn't just entertain, but inspires, educates, and transforms.
                </p>
                <p className="text-xl font-bold mt-4">Apply Today.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Image */}
        <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
          <img 
            src={visionImage} 
            alt="Africa's creative economy going global" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Work at Infinity Network Studio?
          </h2>
          <p className="text-xl text-muted-foreground">
            Where Creativity Meets Possibility
          </p>
        </div>

        <div className="prose prose-lg mx-auto text-foreground space-y-8">
          <div>
            <p className="text-lg leading-relaxed">
              At Infinity Network Studio, we believe stories are not just entertainment—they are engines of culture, identity, and global influence. Africa's creative economy is rising faster than any other, and we are building the platform that will amplify its voice to the world.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Joining our team means joining a movement that is rewriting the global cultural map.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">A Mission Bigger Than Ourselves</h3>
            <p className="text-lg leading-relaxed">
              Every song, every film, every digital story we create is more than content—it is a declaration that Africa's creativity belongs on the world stage. We are not just keeping up with global trends; we are setting them. For our team, this means your work carries real weight. You're not just an employee; you're a cultural architect.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Imagine being able to say: I was part of the studio that scaled Afrobeats beyond Lagos, helped Nollywood films break box office barriers, and launched digital creators who now influence millions worldwide. That's the kind of legacy you build here.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">The Energy of a Startup, the Vision of a Movement</h3>
            <p className="text-lg leading-relaxed">
              Infinity Network Studio thrives on collaboration, experimentation, and bold thinking. We value ideas over titles, execution over talk, and creativity over conformity. Whether you're a filmmaker, a software engineer, a marketer, or a strategist, you will find space to stretch your imagination and leave fingerprints on projects that matter.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We run like a startup—fast, lean, and fearless—but we think like a global movement, connecting Africa to Hollywood, London, and beyond.
            </p>
          </div>

          {/* Culture Image */}
          <div className="rounded-2xl overflow-hidden my-12 shadow-lg">
            <img 
              src={cultureImage} 
              alt="Creative workspace culture at Infinity Network Studio" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">What You Can Expect Here</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Creative Freedom:</h4>
                <p className="text-lg leading-relaxed">We don't box in talent. If you see a better way, you're empowered to try it.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Collaborative Culture:</h4>
                <p className="text-lg leading-relaxed">Work alongside visionaries across music, film, gaming, and tech.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Growth Mindset:</h4>
                <p className="text-lg leading-relaxed">We invest in our people as much as in our projects. Training, mentorship, and exposure are non-negotiables.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Global Impact:</h4>
                <p className="text-lg leading-relaxed">Your work will not only reach audiences across Africa but also stream, trend, and inspire worldwide.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Purpose & Profit:</h4>
                <p className="text-lg leading-relaxed">Yes, we build commercially successful content—but we never forget that our core purpose is cultural empowerment.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Work Mode:</h4>
                <p className="text-lg leading-relaxed">We employ a hybrid work mode. That is to say we work both online (remotely) and in our office. You may not have to be in the office more than twice or thrice a week. But now and then, when we have high workloads, you will be required to come to the office to work or go to a site where we might be interviewing a guest or shooting a video or documentary. But most weeks, you'll only come in twice or thrice.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Who Thrives at Infinity Network Studio?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The bold. The restless. The imaginative. The people who can't sit still when they see a story untold, or a problem unsolved. If you're the kind of person who:
            </p>
            <ul className="text-lg leading-relaxed space-y-2 ml-6">
              <li>Dreams big but executes bigger,</li>
              <li>Loves collaboration but can lead when called on,</li>
              <li>Believes Africa's creative economy is not just a trend but a revolution—</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">…then this is your place.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Your Invitation</h3>
            <p className="text-lg leading-relaxed">
              Infinity Network Studio is not just offering you a job. We're inviting you to build with us, disrupt with us, and grow with us. Together, we're shaping the future of Africa's creative industries—and leaving a mark on global culture that will outlast us all.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              If you're ready to turn creativity into impact, and passion into legacy, then step inside.
            </p>
            <p className="text-xl font-semibold text-primary mt-6">
              Welcome to Infinity Network Studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talents;