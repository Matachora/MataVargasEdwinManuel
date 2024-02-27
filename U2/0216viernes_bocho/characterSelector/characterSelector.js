function main( character )
{

    if ( character == "hutao" )
    {
        document.documentElement.style.setProperty("--fondo", "linear-gradient(90deg,#3d1111,#873838 51.42%,#3d1111)");
        document.getElementById('History').innerHTML = "<p>La joven Hu Tao es la 77.ª directora de la Funeraria El Camino y la principal encargada de todos los asuntos relacionados con ella. Sin embargo, a pesar de su posición, no siempre sabe comportarse como es debido.</p><p>Tiene más ideas malvadas que granos de arena hay en la Costa Yaoguang, y sus ocurrencias siempre pillan desprevenida a cualquier persona.</p><p>Normalmente, Hu Tao es una chica a la que le encanta gastar bromas. Tan pronto como tiene algo de tiempo libre, se dispone a corretear por todas partes, por lo que quienes la conocen la ven como alguien que manda mucho y hace poco.</p><p>Los únicos momentos en los que muestra su faceta más seria y solemne es cuando lidera personalmente una marcha fúnebre a través de una calle iluminada con tenues luces.</p>";
        document.getElementById('pic').src = "media/hutao/HuTao.webp";
    }
    if ( character == "zhongli" )
    {
        document.documentElement.style.setProperty("--fondo", "linear-gradient(90deg,#332414,#80692b 51.42%,#332914)");
        document.getElementById('History').innerHTML = "<p>En las costumbres tradicionales de Liyue, “recibir a los Adeptus” y “despedir a los Adeptus” son igual de importantes.</p><p>La familia Hu, encargada de dirigir la Funeraria El Camino durante 77 generaciones, es la mejor haciendo funerales. Sin embargo, Hu Tao, la actual directora de la Funeraria El Camino, se especializa en el arte de despedir a los mortales.</p><p>Por eso, para las diversas ceremonias de despedida de los Adeptus, Hu Tao suele emplear la ayuda de un amigo que se dedica al mismo negocio que ella: Zhongli. Los Adeptus han convivido con la gente de Liyue durante milenios, pero solo un puñado ha ascendido en los últimos tres mil años, lo que significa que, actualmente, todo lo relacionado con estas tradiciones solamente existe en los textos. No es algo que se pueda ver dos veces en la vida.</p><p>Ni siquiera el más exigente de los investigadores o académicos podría encontrar un error en los Ritos del Ascenso de la Funeraria El Camino.</p><p>Todo debe ser perfecto: el vestuario, el tiempo, el lugar, los objetos, el clima, la duración, el tamaño de la audiencia permitida, la estatura, la profesión y la edad de dicha audiencia... Nada puede pasarse por alto.</p><p>Cuando la gente común describe a Zhongli como una “enciclopedia con patas”, él sonríe, suspira y dice:</p><p>“Yo... solo tengo buena memoria”.</p>";
        document.getElementById('pic').src = "media/zhongli/Zhongli.webp";
    }
    if ( character == "jean" )
    {
        document.documentElement.style.setProperty("--fondo", "linear-gradient(90deg,#17332f,#1c5c56 50%,#17332f)");
        document.getElementById('History').innerHTML = "<p>Los Caballeros de Favonius son los protectores de Mondstadt, la espada y el escudo de esta ciudad.</p><p>Además de mantener la paz y la seguridad en ella y proteger las rutas de viaje de la amenaza de los monstruos de la naturaleza, la responsabilidad más importante de los Caballeros es mantener el orden en todo Mondstadt.</p><p>Aunque sea la Capital de la Libertad, una libertad sin un control de las reglas solo invita al caos y el desorden.</p><p>Jean entiende esto perfectamente, por lo que es diligente y asidua en todo momento, manteniendo siempre los más altos estándares.</p><p>Y... como resultado, a menudo agota su cuota mensual de café nada más comienza el mes sin darse cuenta.</p>";
        document.getElementById('pic').src = "media/jean/Jean.webp";
    }
    if ( character == "diluc" )
    {
        document.documentElement.style.setProperty("--fondo", "linear-gradient(90deg,#3d1111,#873838 51.42%,#3d1111)");
        document.getElementById('History').innerHTML = "<p>Como ciudad de las odas y el vino, el negocio de las bodegas de Mondstadt es conocido en todo Teyvat.</p><p>Diluc es el propietario del Viñedo del Amanecer y quien controla más de la mitad del negocio de bodegas de Mondstadt. Esto quiere decir que también tiene el control sobre el flujo de información, rumores y dinero.</p><p>En cierto modo, Diluc es el rey sin corona de Mondstadt.</p>";
        document.getElementById('pic').src = "media/diluc/Diluc.webp";
    }
}