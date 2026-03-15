export function TabResumen() {
  return (
    <div className="py-8">
      <div className="max-w-3xl">
        <div className="space-y-4 mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
            Resumen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Clase 1
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            En esta primera clase damos inicio al recorrido del espacio curricular
            <strong className="text-primary"> Alfabetizacion Digital</strong>. 
            Comenzamos con la lectura del texto de Michel Serres, 
            <em> Pulgarcita</em>, que nos invita a reflexionar sobre las 
            transformaciones cognitivas y culturales de las nuevas generaciones.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            A partir de esta lectura, exploramos las nuevas formas de aprender 
            y ensenar que emergen en la cultura digital. Introducimos tambien 
            la tematica de la <strong className="text-foreground">inteligencia artificial generativa</strong> y 
            su potencial transformador en los contextos educativos.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Como consigna inicial, proponemos la escritura de una 
            <strong className="text-foreground"> escena de aprendizaje</strong>: una narracion 
            breve que recupere una experiencia pedagogica significativa 
            mediada por tecnologias.
          </p>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-primary">{i}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Proximas clases:</span> Herramientas digitales, Diseno de secuencias, Evaluacion
            </p>
          </div>

          
        </div>
      </div>
    </div>
  )
}
