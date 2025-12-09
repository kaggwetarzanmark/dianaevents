export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Diana Event Rentals</h3>
            <p className="text-foreground/70 mb-2">Premium balloon decorations and event rentals</p>
            <p className="text-foreground/70">Dallas-Fort Worth, TX</p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Working Hours</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-foreground">9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-foreground">10am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-foreground">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Event Days:</span>
                <span className="text-foreground">By Appointment</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <address className="not-italic text-foreground/70">
              <p className="mb-2">Phone: (469) 465-5970</p>
              <p className="mb-2">Email: info@dianaeventrentals.com</p>
              <p>Follow us on social media!</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Diana Event Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
