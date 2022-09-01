import casa from "assets/image/about/casa.png";
import massa1 from "assets/image/about/massa1.png";
import massa2 from "assets/image/about/massa2.png";
import classes from "./About.module.scss";

const About = () => {
	const imagens = [massa1, massa2];

	return (
		<>
			<h3 className={classes.aboutUs__title}>Sobre</h3>
			<div className={classes.aboutUs}>
				<img src={casa} alt="Casa Aluroni"></img>
				<div className={classes.aboutUs__text}>
					<p>
						Nós do Aluroni oferecemos a vocês, nossos queridos
						clientes, a Massa Italiana Caseira mais saborosa e
						sofisticada de São Paulo! Prezamos pelos ingredientes
						tradicionais da culinária Italiana, frescos e de
						excelente qualidade para que sua experiência seja ainda
						mais intensa!
					</p>
					<p>
						Também possuímos uma cardápio de carnes com muitas
						opções de acordo com o seu gosto!
					</p>
					<p>
						Para acompanhar as massas italianas, Aluroni possui uma
						reserva de vinhos especiais, que harmonizam
						perfeitamente com o seu parto, seja carne ou massa!
					</p>
				</div>
			</div>
			<div className={classes.images}>
				{imagens.map((imagem, index) => (
					<div key={index} className={classes.images__image}>
						<img src={imagem} alt="imagem de massa" />
					</div>
				))}
			</div>
		</>
	);
};

export default About;
