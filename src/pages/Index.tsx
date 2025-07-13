import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, Users, Music, TrendingUp, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="relative px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary text-primary-foreground animate-glow-pulse">
            🔥 NEW SYSTEM REVEALED 🔥
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            How Independent Artists Are Going from{" "}
            <span className="text-primary">0 to 10,000+</span>{" "}
            Monthly Listeners in{" "}
            <span className="text-secondary">30 Days</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground font-medium">
            <span className="line-through opacity-75">Without a Label or Viral Moment</span>
            <br />
            No Team? No Budget? <span className="text-primary font-bold">No Problem.</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            We've cracked the code for getting <strong>real fans</strong>, <strong>real streams</strong>, 
            and <strong>real results</strong> for independent artists… even if no one knows who you are right now.
          </p>
          
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 bg-gradient-primary hover:scale-105 transition-transform shadow-glow animate-glow-pulse"
          >
            🎯 Book a Free Strategy Call
          </Button>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            📈 What if growing your artist brand didn't have to be a mystery?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">You're tired of dropping songs into the void.</h3>
                <p className="text-muted-foreground text-sm">Hours in the studio, but crickets when you release.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">You've tried "promotion guys" on IG that gave you bots.</h3>
                <p className="text-muted-foreground text-sm">Fake streams, fake followers, real disappointment.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">You've spent money on playlists that led nowhere.</h3>
                <p className="text-muted-foreground text-sm">But still… you know your music deserves more.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">We Get It — Because We've Been There.</h3>
            <p className="text-lg text-muted-foreground">
              We're not some random agency. We're engineers, marketers, and artist managers who've worked with 
              <span className="text-primary font-semibold"> platinum-selling artists</span>, 
              <span className="text-secondary font-semibold"> major labels</span>, and rising talent—and we're bringing that same system to YOU.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 text-lg px-6 py-2 bg-secondary text-secondary-foreground">
            💡 INTRODUCING
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-primary">Listener Growth</span> System
          </h2>
          
          <p className="text-xl mb-12 text-muted-foreground">
            A proven 30-day system that helps independent artists like you go from zero to 10,000+ verified monthly listeners — 
            and more importantly, builds a foundation of <strong>real fans you can monetize</strong>.
          </p>

          <Button 
            size="lg" 
            className="mb-16 text-xl px-8 py-6 bg-gradient-primary hover:scale-105 transition-transform shadow-glow"
          >
            📞 Book Your FREE Strategy Call
          </Button>
        </div>
      </section>

      {/* Value Stack */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Here's what's inside the system:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Custom 30-Day Release Strategy",
              "Targeted Spotify, YouTube & Instagram Ad Campaigns",
              "Fan Funnel to Collect Emails, Phone Numbers, and Presaves",
              "1-on-1 Artist Brand & Monetization Game Plan",
              "High-Converting Content Templates",
              "Shopify Store Setup & Retargeting Systems",
              "Weekly Check-Ins with Our Team",
              "Exclusive Tools to Track Real Fan Growth (Not Just Streams)"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-destructive bg-destructive/10">
            <CardContent className="p-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                ⚠️ WARNING: This is NOT for everyone.
              </h2>
              
              <div className="space-y-4 text-lg">
                <p>❌ We don't work with artists who aren't serious about growing.</p>
                <p>❌ We don't work with artists looking for quick "fame hacks."</p>
                <p>✅ We only work with creators who are ready to treat their music like a business.</p>
              </div>
              
              <p className="mt-6 text-xl font-semibold">
                If you're willing to show up, do the work, and think like a boss — we'll show you the exact roadmap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            📊 Results Speak Louder Than Dreams
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "From 300 monthly listeners to <span className="text-primary font-bold">12,400 in 28 days</span> — 
                  and over 300 fan emails collected."
                </blockquote>
                <cite className="text-muted-foreground">— Kyle Shirk, Indie Pop Artist</cite>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Started with one hoodie design. Now selling <span className="text-primary font-bold">$500/month in merch</span> 
                  {" "}with a fan list we can retarget."
                </blockquote>
                <cite className="text-muted-foreground">— Milo J, Independent Rapper</cite>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Our ads got more traction than our label's rollout — 
                  <span className="text-primary font-bold">this system just works</span>."
                </blockquote>
                <cite className="text-muted-foreground">— Anonymous Label Exec</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why This Works (Even If You've Tried Other "Promo" Before)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">🔁 It's a System, Not a Service</h3>
              <p className="text-muted-foreground">
                We build you a machine that keeps growing fans even after the song drops.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">📲 We Focus on Collecting Data, Not Just Streams</h3>
              <p className="text-muted-foreground">
                Bots and fake playlists don't build careers. But real fans who join your email list and buy merch? That's a business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">🧠 You're Working With Real Marketers & Music Minds</h3>
              <p className="text-muted-foreground">
                We're not middlemen — we're the ones behind the screen. Engineers. Strategists. Artists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity + CTA */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            📞 Ready to See If You're a Fit?
          </h2>
          
          <p className="text-xl mb-8 text-muted-foreground">
            We'll map out your exact fan growth plan — no pressure, no BS.
            <br />
            Whether you're just starting or have 5 songs out, we'll show you exactly what to do next.
          </p>

          <Card className="p-6 mb-8 border-destructive bg-destructive/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="text-destructive" size={24} />
                <span className="text-xl font-bold text-destructive">LIMITED SPOTS AVAILABLE</span>
              </div>
              <p className="text-lg">
                🚨 We Only Take On <span className="text-primary font-bold">5 New Artists Per Month</span>
              </p>
              <p className="text-muted-foreground mt-2">Apply now before this month fills up.</p>
            </CardContent>
          </Card>

          <Button 
            size="lg" 
            className="text-2xl px-12 py-8 bg-gradient-primary hover:scale-105 transition-transform shadow-glow animate-glow-pulse"
          >
            📅 BOOK MY FREE CALL NOW
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Will this work for me if I've tried stuff before?",
                answer: "Yes, especially if other methods failed. Most \"promo guys\" use bots or pay-for-play schemes that don't build real fanbases. Our system focuses on creating genuine connections with people who will actually listen to, share, and buy from you long-term."
              },
              {
                question: "What if I'm just starting out with no following?",
                answer: "Perfect! It's actually easier to build the right foundation from scratch than to fix a broken one. We've helped artists go from 0 to 10k+ listeners in their first month of serious marketing."
              },
              {
                question: "How is this different from just running ads myself?",
                answer: "Anyone can throw money at Facebook or Instagram ads. We build complete fan acquisition funnels that capture emails, phone numbers, and create repeat customers. Plus, you get our proven templates, targeting strategies, and weekly optimization calls."
              },
              {
                question: "What genres does this work for?",
                answer: "Our system works for any genre, but we specialize in hip-hop, pop, R&B, and electronic music. The principles of fan growth are universal — it's about finding your people and giving them a reason to care."
              },
              {
                question: "How much should I budget for ads?",
                answer: "We recommend starting with $300-500/month for ads, but we'll show you exactly how to scale profitably. Many of our artists are making that back in merch and streaming revenue within 60 days."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Music Deserves an Audience
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Stop hoping for luck. Start building a system that works.
            <br />
            Book your free strategy call and let's map out your path to 10,000+ monthly listeners.
          </p>

          <Button 
            size="lg" 
            variant="secondary"
            className="text-2xl px-12 py-8 hover:scale-105 transition-transform shadow-lg"
          >
            📅 BOOK YOUR FREE STRATEGY CALL
          </Button>
          
          <p className="mt-6 text-sm opacity-75">
            No credit card required • 30-minute call • Zero pressure
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-muted-foreground">
        <p>&copy; 2024 Artist Growth System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
