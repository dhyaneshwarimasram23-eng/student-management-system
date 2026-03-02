function login(user) {
    if (user.role === "student") {
        return "Student Dashboard";
    }
    if (user.role === "admin") {
        return "Admin Dashboard";
    }
    return "Unauthorized";
}

module.exports = login;function login(user) {
    if (user.role === "student") {
        return "Welcome Student";
    }
    return "Access Denied";
}

module.exports = login;
