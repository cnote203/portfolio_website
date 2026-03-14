"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Copy, Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export default function ContactPage() {
  const [copied, setCopied] = useState<{
    email: boolean
    phone: boolean
    linkedin: boolean
  }>({
    email: false,
    phone: false,
    linkedin: false,
  })

  const copyToClipboard = (text: string, type: "email" | "phone" | "linkedin") => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [type]: true })
    setTimeout(() => {
      setCopied({ ...copied, [type]: false })
    }, 2000)
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">Contact Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center mb-6">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1705520863429.jfif-BcTX3qx1SLtjaZWFIC2O1Na6TcwvZX.jpeg"
                  alt="Christopher Accad"
                  className="object-cover"
                />
                <AvatarFallback>CA</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">Ottawa, Ontario</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">Christopher@accad.org</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard("Christopher@accad.org", "email")}>
                {copied.email ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">289-698-8456</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard("289-698-8456", "phone")}>
                {copied.phone ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="https://www.linkedin.com/in/christopher-accad-22ba121b9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary"
                    >
                      Christopher Accad
                    </a>
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard("https://www.linkedin.com/in/christopher-accad-22ba121b9/", "linkedin")}
              >
                {copied.linkedin ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I'm a Biomedical Mechanical Engineering student at the University of Ottawa with experience in CAD design,
              programming, and project management.
            </p>
            <p className="mb-4">
              I'm passionate about leveraging technology to solve complex problems in healthcare and beyond. My diverse
              skill set spans from 3D modeling and simulation to coding in multiple languages and developing automation
              solutions.
            </p>
            <div className="pt-4">
              <h3 className="font-medium mb-2">Availability</h3>
              <p className="text-muted-foreground">
                I'm currently working at the Department of National Defence, but I'm open to discussing new
                opportunities and collaborations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
