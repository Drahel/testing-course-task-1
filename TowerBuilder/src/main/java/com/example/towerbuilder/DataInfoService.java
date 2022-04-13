package com.example.towerbuilder;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class DataInfoService {

        private final DataInfoRepository dataInfoRepository;

        @Transactional
        public DataInfoDto createInfo(CUDataInfoDto cuDataInfoDto) {
            var entity = new DataInfoEntity(
                    UUID.randomUUID().toString(),
                    cuDataInfoDto.getInput(),
                    Arrays.toString(cuDataInfoDto.getOutput())
            );
            var savedEntity = dataInfoRepository.save(entity);
            DataInfoDto dataInfoDto = new DataInfoDto(
                    savedEntity.getUuid(),
                    savedEntity.getInput(),
                    savedEntity.getOutput()
            );
            return dataInfoDto;
        }

        @Transactional(readOnly = true)
        public DataInfoDto getById(String id) {
            var NewEntity = dataInfoRepository.findById(id).orElseThrow(
                    ()->new DataNotFoundException("Информация с id " + id + " не найдена!")
            );
            DataInfoDto dataInfoDto = new DataInfoDto(
                    NewEntity.getUuid(),
                    NewEntity.getInput(),
                    NewEntity.getOutput()
            );
            return dataInfoDto;
        }

         @Transactional
         public void deleteInfo() {
            dataInfoRepository.deleteAll();
         }

        @Transactional(readOnly = true)
        public List<DataInfoDto> getFullInfo() {
            var dataInfoEntities = dataInfoRepository.findAll();
            var result = new ArrayList<DataInfoDto>();
            dataInfoEntities.forEach(NewEntity -> result.add(new DataInfoDto(
                    NewEntity.getUuid(),
                    NewEntity.getInput(),
                    NewEntity.getOutput()
            )));
            return result;
        }




}
