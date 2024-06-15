import { CreateResultadoDto, UpdateResultadoDto } from '../dtos';
import { ResultadoEntity } from '../entities/resultado.entity';



export abstract class PreguntaRepository {

  abstract create( createPreguntaDto: CreatePreguntaDto ): Promise<PreguntaEntity>;
  abstract getAll(): Promise<PreguntaEntity[]>;
  abstract findById( id: number ): Promise<PreguntaEntity>;
  abstract updateById( updatePreguntaDto: UpdatePreguntaDto ): Promise<PreguntaEntity>;
  abstract deleteById( id: number ): Promise<PreguntaEntity>;

}