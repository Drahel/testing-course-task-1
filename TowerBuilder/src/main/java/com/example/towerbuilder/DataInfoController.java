package com.example.towerbuilder;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/database")
@RequiredArgsConstructor
public class DataInfoController {

        private final DataInfoService dataInfoService;

        @PostMapping("/create")
        public DataInfoDto createInfo(@RequestBody CUDataInfoDto cuDataInfoDto) {
            return dataInfoService.createInfo(cuDataInfoDto);
        }

        @GetMapping("/{id}")
        public DataInfoDto getById(@PathVariable String id) {
            return dataInfoService.getById(id);
        }

        @GetMapping("/full")
        public List<DataInfoDto> getFullInfo() {
            return dataInfoService.getFullInfo();
        }

        @DeleteMapping("/clear")
        public void clearDatabase() {
            dataInfoService.deleteInfo();
        }
    }



