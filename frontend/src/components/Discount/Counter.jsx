import Timer from "../Timer"

function Counter() {
    return (
        <section className="bg-gradient-to-t xl:bg-gradient-to-l from-[#FFE1B5] to-[#FFC062] rounded-t-none rounded-b-[10px] xl:rounded-[10px] xl:mt-16 xl:h-[268px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]">
            <div className="flex flex-col xl:grid xl:grid-cols-2 xl:mx-[87px] xl:pt-14 xl:space-x-20 px-4  xl:px-0">
                <h2 className="text-general font-bold xl:text-6xl text-tlv text-balance pt-4 xl:-mt-6 2xl:mt-0">Aprovechá esta oferta imperdible</h2>
                <div className="flex flex-col mb-5 xl:mb-0">
                    <p className="text-specific font-bold text-xl xl:text-2xl xl:mb-5 mt-4 mb-2 xl:mt-0">Oferta limitada</p>
                    <Timer duration={2 * 24 * 60 * 60 * 1000} />
                </div>
            </div>

        </section>
    )
}

export default Counter