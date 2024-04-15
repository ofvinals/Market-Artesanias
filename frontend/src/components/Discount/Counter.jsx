import Timer from "../Timer"

function Counter() {
    return (
        <section className=" bg-gradient-to-l from-[#FFE1B5] to-[#FFC062] rounded-[10px] mt-16 h-[268px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-2 mx-[87px] pt-14 space-x-20">
                <h2 className="text-general font-bold text-6xl">Aprovechá esta oferta imperdible</h2>
                <div className="flex flex-col ">
                    <p className="text-specific font-bold text-2xl mb-5">Oferta limitada</p>
                    <Timer duration={2 * 24 * 60 * 60 * 1000} />
                </div>
            </div>

        </section>
    )
}

export default Counter