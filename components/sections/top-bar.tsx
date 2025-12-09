export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.595.886a1 1 0 00-.439.69l-.146.583a1 1 0 01-.948.729H4a1 1 0 01-1-1V3zM12.545 6.34a1 1 0 011.09.217l.096.133a1 1 0 00.745.374H16a1 1 0 011 1v2.023a1 1 0 01-1.217.98l-.133-.096a1 1 0 00-.374-.745H14.8a1 1 0 01-.745-.374l-.133-.096a1 1 0 01.217-1.09l.518-.518zM3 17a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" />
          </svg>
          <span>469-465-5970</span>
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>diamasgum@gmail.com</span>
        </div>
      </div>
    </div>
  )
}
