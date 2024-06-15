import { CreatePacienteDto, UpdatePacienteDto } from '../dtos';
import { PacienteEntity } from '../entities/paciente.entity';



export abstract class CiudadanoRepository {

  abstract create( createTodoDto: CreatePacienteDto ): Promise<PacienteEntity>;
  abstract getAll(): Promise<CiudadanoEntity[]>;
  abstract findById( id: number ): Promise<CiudadanoEntity>;
  abstract updateById( updateTodoDto: UpdateCiudadanoDto ): Promise<CiudadanoEntity>;
  abstract deleteById( id: number ): Promise<CiudadanoEntity>;

}