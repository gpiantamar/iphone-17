


function Footer() {

    const sections = [
        { title: 'Comprar e Saber Mais', links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar modelos', 'Acessórios'] },
        { title: 'Especificações', links: ['Características técnicas', 'Câmera', 'Bateria', 'Display'] },
        { title: 'Suporte', links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato'] },
        { title: 'Apple', links: ['Sala de Imprensa', 'Trabalhe na Apple', 'Investidores', 'Sustentabilidade'] },
    ]

    const buttonLinks = ['Privacidade', 'Termos de Uso', 'Vendas e Reembolso']

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:underline hover:text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-300 text-md">Brasil © 2026 Apple Inc. Todos os direitos reservados.</p>
                        <div className="flex gap-6 text-md text-gray-400">
                            {buttonLinks.map((link, index) => (
                                <a key={index} href="#" className="hover:underline hover:text-white cursor-pointer">{link}</a>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-6">Site criado para fins educacionais por Guilherme Silva</p>
                </div>
            </div>


        </footer>
    )
}

export default Footer;