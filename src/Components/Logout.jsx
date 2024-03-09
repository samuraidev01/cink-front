export default function Logout() {

    localStorage.removeItem("token");
    let token = localStorage.getItem('token');
    if (!token) {
        window.location.href = "http://127.0.0.1:3000/login";
    }
  return (
    <div>Logout</div>
  )
}
