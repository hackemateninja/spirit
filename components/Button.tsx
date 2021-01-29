import Link from "next/link";

interface Button{
	route:string,
	title: string
}

export default function Button({route, title}:Button){
	return(
		<Link href={route}>
			<div className="main-gradient p-1 hidden md:flex">
				<button className="button text-color">
					{title}
				</button>
			</div>
		</Link>
	);
}
