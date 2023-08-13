import { fuzzy_bubbles_bold as fbb } from "@/styles/fonts";

function Square({ width, height, className, color, transform }: { width: number, height: number, color: string, transform?: string, className?: string }) {
    return (
        <svg width={width} height={height} className={className} transform={transform}>
            <rect width={width} height={height} className={color}/>
        </svg>
    );
}

function Circle({ radius, className, color, transform }: { radius: number, color: string, transform?: string, className?: string }) {
    return (
        <svg width={radius*2} height={radius*2} className={className} transform={transform}>
            <ellipse cx={radius} cy={radius} rx={radius} ry={radius} className={color}/>
        </svg>
    );
}

function Triangle({ width, height, className, color, transform }: { width: number, height: number, color: string, transform?: string, className?: string }) {
    let points=`0,${height} ${width/2},0 ${width},${height}`;
    return (
        <svg width={width} height={height} className={className} transform={transform}>
            <polygon points={points} className={color}/>
        </svg>
    );
}

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-row justify-center bg-pink-2 p-3 overflow-hidden">
        <div className="max-w-[800px] w-full h-full flex flex-col justify-center items-center p-3 relative">
            <Square width={75} height={75} color="fill-red-1" className="absolute top-12 left-16 md:left-32 duration-200" transform="rotate(45)" />
            <Circle radius={50} color="fill-purple-1" className="absolute -bottom-12 right-16" />
            <Triangle width={100} height={100} color="fill-blue-4" className="absolute -right-4 opacity-70" transform="rotate(-60)"/>
            <Triangle width={75} height={75} color="fill-green-1" className="absolute bottom-12 left-4" transform="rotate(60)"/>

            <div className="flex flex-col items-center text-center z-10">
                <h1 className={"text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-1 to-red-1 " + fbb.className}>Hello</h1>
                <p className="text-xl text-slate-3">Welcome to my little corner of the internet</p>
            </div>
        </div>
    </main>
  )
}
