import { CreatePacienteDto, UpdatePacienteDto } from '../dtos';
import { PacienteEntity } from '../entities/paciente.entity';



export abstract class CiudadanoRepository {

  abstract create( createTodoDto: CreatePacienteDto ): Promise<PacienteEntity>;
  abstract getAll(): Promise<PacienteEntity[]>;
  abstract findById( id: number ): Promise<PacienteEntity>;
  abstract updateById( updateTodoDto: UpdatePacienteDto ): Promise<PacienteEntity>;
  abstract deleteById( id: number ): Promise<PacienteEntity>;

}