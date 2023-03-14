function Card(props) {
    return (
        <div className="col-span-1">
            <a href={"/birds-blog-astro/info/".concat(props.uid)}>
                <div
                    className="flex flex-row rounded-lg bg-base-100 hover:ring-inset hover:ring-4 hover:ring-primary min-h-full active:bg-primary transform duration-75 active:scale-95">
                    <div className="m-2 avatar">
                        <div className="w-36 lg:w-40 xl:w-48 rounded-lg">
                            <img className="object-cover min-h-full w-full " src={props.image} alt={props.latin} />
                        </div>
                    </div>
                    <div className="card-body justify-center">
                        <h1 className="text-2xl">{props.spanish}</h1>
                        <h2 className="italic">{props.latin}</h2>
                        <h2>{props.english}</h2>
                    </div>
                </div>
            </a>
        </div>
    )
};
export default Card;