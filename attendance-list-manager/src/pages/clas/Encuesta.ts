
export class Encuesta {

	public nombre;
 	public pregunta;
  	public respuesta1;
  	public respuesta2;
    public respuesta3;
 
  constructor(nombre: string, pregunta: string, respuesta1:  string, respuesta2: string, respuesta3:  string) {
    
    this.nombre = nombre;
        this.pregunta = pregunta;
        this.respuesta1 = respuesta1;
this.respuesta2 = respuesta2;
this.respuesta3 = respuesta3;
    
  }

	
	public GetNombre()
	{
		return this.nombre;
	}
	public  Getpregunta()
	{
		return this.pregunta;
	}
	public  Getrespuesta1()
	{
		return this.respuesta1;
	}
    public  Getrespuesta2()
	{
		return this.respuesta2;
	}
   public Getrespuesta3()
	{
		return this.respuesta3;
	}
 
	
	public  SetNombre(valor)
	{
		this.nombre = valor;
	}
	public  SetPregunta(valor)
	{
		this.pregunta = valor;
	}
	public  SetRespuesa1(valor)
	{
		this.respuesta1 = valor;
	}
    public  SetRespuesa2(valor)
	{
		this.respuesta2 = valor;
	}
    public SetRespuesa3(valor)
	{
		this.respuesta3 = valor;
	}

}

