import {useSelector} from "react-redux";
const FullName = () => {
	const result = useSelector(state => state.app.user);
	return `${result.first_name} ${result.last_name}`;
};

export default FullName;