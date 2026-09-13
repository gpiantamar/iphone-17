

function Colors(){

    const colors = [
        { id: 'blue', name: "Titânio Azul", image: "/img/iphone-blue.jpg", colorClass:'bg-blue-500' },
        { id: 'silver', name: "Titânio Natural", image: "/img/iphone-silver.jpg", colorClass:'bg-gray-300' },
        { id: 'orange', name: "Titânio Laranja", image: "/img/iphone-orange.jpg", colorClass:'bg-orange-500' }
    ];

    const models = [
        {id: 'Pro Max', name: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g'},
        {id: 'Pro', name: '6.3 polegadas', storage: '256GB, 512GB ou 1TB', battery: '29h de vídeo', weight: '199g'},
    ];

    let nome = 'Rodolfo'

    function trocaNome(){
        nome = 'Guilherme'
        console.log('Nome')
    }

    return(
        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4"> Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Explore as cores deslumbrantes do iPhone 18 Pro.</p>
                </div>

                <button onClick={trocaNome} className="bg-red-400">Mude o nome</button>

                <p>{nome}</p>
            </div>
        </section>
    )
}


export default Colors;