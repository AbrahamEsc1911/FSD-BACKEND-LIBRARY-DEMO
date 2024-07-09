import bcrypt from 'bcrypt'
import { AppDataSource } from "../db"
import { User } from "../models/User"


export const usersSeeders = async () => {
    try {

        await AppDataSource.initialize()

        const adminUser = new User()
        adminUser.id = 1
        adminUser.name = "admin"
        adminUser.email = "admin@admin.com"
        adminUser.password = bcrypt.hashSync('123456789', 10)
        adminUser.role = "admin";

        await adminUser.save()

        const superAdminUser = new User()
        superAdminUser.id = 2
        superAdminUser.name = "superAdmin"
        superAdminUser.email = "superadmin@superadmin.com"
        superAdminUser.password = bcrypt.hashSync('123456789', 10)
        superAdminUser.role = "super_admin";

        await superAdminUser.save()

        const user = new User()
        user.id = 3
        user.name = "user"
        user.email = "user@user.com"
        user.password = bcrypt.hashSync('123456789', 10)
        user.role = "user";

        await user.save()

    } catch (error) {

    }
}