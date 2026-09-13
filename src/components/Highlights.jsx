

function Highlights() {
    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5lx font-bold mb-4">Design revolucionário</h2>
                    <p className="text-lx text-gray-400">Cada detalhe foi pensado para criar a melhor experiência em suas mãos.</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="Titanium aeroespacial" />
                        <h3 className="text-3xl font-bold mb-2">Titanium Premium</h3>
                        <p className="text-gray-300">
                            Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.
                        </p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="Recursos do iOS" />
                        <h3 className="text-3xl font-bold mb-2">iOS 26</h3>
                        <p>
                            O sistema operacional mais avançado com IA integrada.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone.</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="Chip A18 Pro" />
                    <ul className="space-y-3">
                        <li className="space-y-3 text-gray-300">CPU 20% mais rápida</li>
                        <li className="space-y-3 text-gray-300">GPU 20% mais eficiente</li>
                        <li className="space-y-3 text-gray-300">Neural Engine com 16 núcleos</li>
                        <li className="space-y-3 text-gray-300">Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div className="text-center" id="camera">
                    <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-full p-8 hover:scale-105 transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">40MP</div>
                            <h4 className="text-2xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                        </div>

                        <div className="bg-gray-900 rounded-full p-8 hover:scale-105 transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-2xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visão de 120º</p>
                        </div>

                        <div className="bg-gray-900 rounded-full p-8 hover:scale-105 transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-2xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Highlights