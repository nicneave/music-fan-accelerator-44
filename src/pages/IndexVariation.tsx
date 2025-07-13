import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, Users, Music, TrendingUp, Shield, Zap, ArrowRight, Target, Rocket } from "lucide-react";

const IndexVariation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Video-style approach */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm px-4 py-2 bg-destructive text-destructive-foreground">
              CASE STUDY REVEALED
            </Badge>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              The <span className="text-primary">Secret System</span> Behind<br />
              Independent Artists Going{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Viral</span>
            </h1>
            
            <h2 className="text-lg md:text-xl mb-6 text-muted-foreground max-w-3xl mx-auto">
              How 47 unknown artists built massive followings in 30 days using a proven blueprint 
              (without a label, viral moment, or existing fanbase)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-primary/20 bg-primary/5">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Monthly Listeners</div>
                <div className="text-xs text-muted-foreground mt-1">Average in 30 days</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center border-secondary/20 bg-secondary/5">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-secondary mb-2">$500+</div>
                <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                <div className="text-xs text-muted-foreground mt-1">From merch & fanbase</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center border-accent/20 bg-accent/5">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-accent mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Real Fan Emails</div>
                <div className="text-xs text-muted-foreground mt-1">Quality over quantity</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-gradient-primary hover:scale-105 transition-all shadow-glow"
            >
              <Rocket className="mr-2" size={20} />
              Get the Blueprint (Free Call)
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              ⏰ Limited spots • No pitch • Just strategy
            </p>
          </div>
        </div>
      </section>

      {/* Story/Problem Section - Timeline approach */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Problem Every Independent Artist Faces...
            </h2>
            <p className="text-lg text-muted-foreground">
              Sound familiar? You're not alone.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border-l-4 border-destructive">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground font-bold text-sm">1</div>
              <div>
                <h3 className="font-bold mb-2">You create amazing music but it gets lost in the noise</h3>
                <p className="text-muted-foreground">Hours of studio time, perfect mix, but only your friends and family listen.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border-l-4 border-destructive">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground font-bold text-sm">2</div>
              <div>
                <h3 className="font-bold mb-2">You've tried Instagram "promo guys" who delivered fake engagement</h3>
                <p className="text-muted-foreground">Spent hundreds on bot followers and fake playlist placements that led nowhere.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border-l-4 border-destructive">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground font-bold text-sm">3</div>
              <div>
                <h3 className="font-bold mb-2">You watch other artists "blow up" and wonder what they're doing differently</h3>
                <p className="text-muted-foreground">Meanwhile, your best songs sit at under 1,000 streams.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-center">Here's what we discovered...</h3>
            <p className="text-lg text-center">
              The artists who succeed aren't just talented — they have a <span className="text-primary font-semibold">systematic approach to fan acquisition</span>.
              <br />We reverse-engineered their methods and built a repeatable system.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Different angle */}
      <section className="px-4 py-16 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-lg px-6 py-2 bg-primary text-primary-foreground">
              THE SOLUTION
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Artist <span className="text-primary">Fan Acquisition</span> Blueprint
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A step-by-step system that turns your music into a fan-generating machine — 
              building real listeners who actually care about your art.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-bold mb-2">Week 1: Target</h3>
              <p className="text-sm text-muted-foreground">Identify your ideal fans and where they hang out online</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-secondary" size={28} />
              </div>
              <h3 className="font-bold mb-2">Week 2: Capture</h3>
              <p className="text-sm text-muted-foreground">Create irresistible content that stops the scroll</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="font-bold mb-2">Week 3: Convert</h3>
              <p className="text-sm text-muted-foreground">Turn listeners into subscribers and email contacts</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="font-bold mb-2">Week 4: Scale</h3>
              <p className="text-sm text-muted-foreground">Optimize and multiply what's working</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-transform shadow-glow"
            >
              Show Me How This Works
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included - Different layout */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Everything You Get in the System
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Custom 30-Day Release Strategy",
                "Targeted Spotify, YouTube & Instagram Ad Campaigns", 
                "Fan Funnel to Collect Emails, Phone Numbers, and Presaves",
                "1-on-1 Artist Brand & Monetization Game Plan"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              {[
                "High-Converting Content Templates",
                "Shopify Store Setup & Retargeting Systems",
                "Weekly Check-Ins with Our Team",
                "Exclusive Tools to Track Real Fan Growth (Not Just Streams)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonial focus */}
      <section className="px-4 py-16 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Real Artists, Real Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card relative">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={16} />
                  ))}
                </div>
                <blockquote className="text-base mb-4 italic">
                  "Went from 300 to <span className="text-primary font-bold">12,400 monthly listeners</span> in 28 days. 
                  Plus collected over 300 fan emails I can market to forever."
                </blockquote>
                <cite className="text-sm text-muted-foreground font-medium">Kyle Shirk, Indie Pop</cite>
                <div className="absolute top-4 right-4 text-primary/20">
                  <Music size={24} />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card relative">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={16} />
                  ))}
                </div>
                <blockquote className="text-base mb-4 italic">
                  "Started with one merch design. Now making <span className="text-primary font-bold">$500/month</span> 
                  with a fanbase that actually buys my stuff."
                </blockquote>
                <cite className="text-sm text-muted-foreground font-medium">Milo J, Hip-Hop</cite>
                <div className="absolute top-4 right-4 text-primary/20">
                  <Music size={24} />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card relative">
              <CardContent className="p-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={16} />
                  ))}
                </div>
                <blockquote className="text-base mb-4 italic">
                  "Our marketing performed better than our label's campaign. 
                  <span className="text-primary font-bold">This system just works.</span>"
                </blockquote>
                <cite className="text-sm text-muted-foreground font-medium">Anonymous Label Exec</cite>
                <div className="absolute top-4 right-4 text-primary/20">
                  <Music size={24} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Our System Works When Others Fail
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Systems, Not Services</h3>
              <p className="text-muted-foreground text-sm">
                We build you a repeatable machine, not a one-time campaign
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Real Fans, Not Bots</h3>
              <p className="text-muted-foreground text-sm">
                Focus on building genuine connections that convert to sales
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Industry Insiders</h3>
              <p className="text-muted-foreground text-sm">
                Real marketers who've worked with platinum artists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning - Different style */}
      <section className="px-4 py-16 bg-gradient-to-r from-destructive/10 to-destructive/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ⚠️ Fair Warning: This Isn't For Everyone
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <CardContent className="p-0">
                <h3 className="font-bold mb-3 text-destructive">❌ NOT For You If:</h3>
                <ul className="text-sm space-y-2 text-left">
                  <li>• You want overnight fame</li>
                  <li>• You're not willing to invest in ads</li>
                  <li>• You expect us to do everything</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-primary/10 border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-bold mb-3 text-primary">✅ Perfect For You If:</h3>
                <ul className="text-sm space-y-2 text-left">
                  <li>• You treat music like a business</li>
                  <li>• You're ready to follow a system</li>
                  <li>• You want sustainable growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - Condensed */}
      <section className="px-4 py-16 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Quick Questions & Answers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What if I've tried promotion before?",
                answer: "Most promotion is fake streams and bots. We build real fanbases that convert to sales."
              },
              {
                question: "I'm brand new with no following?", 
                answer: "Perfect! It's easier to build the right foundation from zero than fix a broken one."
              },
              {
                question: "How is this different from running ads myself?",
                answer: "We build complete funnels that capture fans for life, not just one-time listens."
              },
              {
                question: "What budget do I need for ads?",
                answer: "Start with $300-500/month. Most artists break even within 60 days."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-4">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-2 text-sm">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Urgency focused */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Fanbase?
              </h2>
              
              <p className="text-lg mb-6 text-muted-foreground">
                Book a free 30-minute strategy call where we'll map out your exact fan growth plan.
                <br />No pitch, no pressure — just a clear roadmap.
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="text-destructive" size={20} />
                  <span className="font-bold text-destructive">ONLY 5 SPOTS LEFT THIS MONTH</span>
                </div>
                <p className="text-sm text-muted-foreground">Don't miss out on December availability</p>
              </div>

              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-primary hover:scale-105 transition-all shadow-glow mb-4"
              >
                📞 CLAIM MY FREE STRATEGY CALL
              </Button>
              
              <p className="text-xs text-muted-foreground">
                ✅ No credit card • ✅ Zero obligation • ✅ 30 minutes max
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-card border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">&copy; 2024 Artist Growth System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexVariation;