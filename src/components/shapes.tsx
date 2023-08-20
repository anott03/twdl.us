export function Square({ width, height, className, color, rotate }: { width: number, height: number, color: string, rotate?: string, className?: string }) {
    return (
        <div className={className + " block overflow-visible"} data-type="shape" style={{ width, height, rotate}}>
            <svg width="100%" height="100%">
                <rect width={width} height={height} className={color}/>
            </svg>
        </div>
    );
}

export function Circle({ radius, className, color, rotate }: { radius: number, color: string, rotate?: string, className?: string }) {
    return (
        <div className={className + " block overflow-visible"} data-type="shape" style={{ width: radius*2, height: radius*2, rotate}}>
            <svg width="100%" height="100%">
                <ellipse cx={radius} cy={radius} rx={radius} ry={radius} className={color}/>
            </svg>
        </div>
    );
}

export function Triangle({ width, height, className, color, rotate }: { width: number, height: number, color: string, rotate?: string, className?: string }) {
    let points=`0,${height} ${width/2},0 ${width},${height}`;
    return (
        <div className={className + " block overflow-visible"} data-type="shape" style={{ width, height, rotate}}>
            <svg width="100%" height="100%">
                <polygon points={points} className={color}/>
            </svg>
        </div>
    );
}

