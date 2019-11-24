import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

const displayNotify = (type, message) => {
	switch(type) {
		case "success":
			toast.success(message)
			break
		case "error":
			toast.error(message)
			break
		case "warn":
			toast.warn(message)
			break
		case "info":
			toast.info(message)
			break
	}
}

export default displayNotify