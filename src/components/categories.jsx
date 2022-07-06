const Categories = ({items, onClick}) => {
	return (
		<div className="categories">
			<ul>
				<li className="active">Все</li>
				{items.map((e, index)=> {
					return <li onClick = {() => onClick(e)} key = {`${e}_${index}`}>{e}</li>
				})}
			</ul>
		</div>
	);
};

export default Categories;
