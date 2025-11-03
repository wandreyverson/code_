"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 md:w-96 shadow-2xl border-orange-200 z-50 animate-in slide-in-from-bottom-5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-orange-600 text-white">
            <CardTitle className="text-lg">Fitness Support</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 hover:bg-white/20 text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 bg-white">
            {!showForm ? (
              <div className="space-y-4">
                <div className="space-y-3 h-64 overflow-y-auto">
                  <div className="flex gap-2">
                    <div className="bg-neutral-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-neutral-900">
                        Hello! How can I help you with your fitness journey today?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-neutral-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-neutral-900">
                        Ask me about workouts, equipment, supplements, or nutrition!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button size="icon" className="bg-orange-600 hover:bg-orange-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  onClick={() => setShowForm(true)}
                >
                  Open Contact Form
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForm(false)}
                  className="mb-2 text-orange-600 hover:bg-orange-50"
                >
                  ← Back to chat
                </Button>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block text-neutral-900">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-neutral-900">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-neutral-900">Subject</label>
                    <Input placeholder="Message subject" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-neutral-900">Message</label>
                    <Textarea placeholder="Your message..." rows={4} />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Send Message</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-4 h-14 w-14 rounded-full shadow-lg bg-orange-600 hover:bg-orange-700 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </>
  )
}
