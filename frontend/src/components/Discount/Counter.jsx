import Timer from "../Timer"

function Counter() {
    return (
        <section className="bg-gradient-to-t md:bg-gradient-to-l from-[#FFE1B5] to-[#FFC062] rounded-t-none rounded-b-[10px] md:rounded-[10px] md:mt-16 md:h-[268px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]">
            <div className="flex flex-col md:grid md:grid-cols-2 md:mx-[87px] md:pt-14 md:space-x-20 px-4  md:px-0">
                <h2 className="text-general font-bold md:text-6xl text-tlv text-balance  pt-4">Aprovechá esta oferta imperdible</h2>
                <div className="flex flex-col mb-5 md:mb-0">
                    <p className="text-specific font-bold text-xl md:text-2xl md:mb-5 mt-4 mb-2 md:mt-0">Oferta limitada</p>
                    <Timer duration={2 * 24 * 60 * 60 * 1000} />
                </div>
            </div>

        </section>
    )
}

export default Counter