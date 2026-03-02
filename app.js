const login = (user) => {
    switch (user.role) {
        case "student":
            return "Student Dashboard";
        default:
            return "Unauthorized";
    }
};

module.exports = login;function login(user) {
    if (user.role === "student") {
        return "Welcome Student";
    }
    return "Access Denied";
}

module.exports = login;
