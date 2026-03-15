export function TabResumen() {
  return (
    <div className="py-8 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto px-4 text-center">
        <div className="space-y-4 mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
            Resumen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Clase Pulgarcita
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="space-y-6 text-center">
          <p className="text-lg text-foreground leading-relaxed">
            En esta primera clase damos inicio al recorrido del espacio curricular
            <strong className="text-primary"> Alfabetización Digital</strong>. 
            Comenzamos con la visualización del video de Michel Serres, 
            <em> Pulgarcita</em>, que nos invita a reflexionar sobre las 
            transformaciones cognitivas y culturales de las nuevas generaciones.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            A partir de esta visualización, exploramos las nuevas formas de aprender 
            y enseñar que emergen en la cultura digital. Introducimos también 
            la temática de la <strong className="text-foreground">inteligencia artificial generativa</strong> y 
            su potencial transformador en los contextos educativos.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Como consigna inicial, proponemos la escritura de una 
            <strong className="text-foreground"> escena de aprendizaje</strong>: una narración 
            breve que recupere una experiencia pedagógica significativa 
            mediada por tecnologías.
          </p>
        </div>
      </div>
    </div>
  )
}
