import { UserDtoDomain } from "src/domain/user.dto.domain";
import { IBaseRepository } from "./base-repository";

export interface UserRepository extends IBaseRepository<UserDtoDomain, number> {

}